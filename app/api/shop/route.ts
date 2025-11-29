import { headers } from "next/headers";

const axios = require('axios');
const cheerio = require('cheerio');

require('dotenv').config(); // idk if this is required for nextjs but oh well

export async function GET(request: Request) {
    let url = `https://flavortown.hackclub.com/shop`;
    const {data: html} = await axios.get( // may have copied from client of making (my project :P)
        url,
        {
            headers: {
                Cookie: process.env.NON_USER_BASED_FT_COOKIE,
                'User-Agent': 'Pan API',
                Accept: 'text/html'
            }
        }
    );
    const $ = cheerio.load(html);
    const items: any = [];
    $('.shop-item-card').each((i: any, el: any) => {
        const $card = $(el);
        const $content = $card.find('.shop-item-card__content');
        const $details = $content.find('.shop-item-card__details');
        items.push({
            name: $content.find('h4').text().trim(),
            description: $content.find('p.shop-item-card__description').text().trim(),
            price: $details.find('span.shop-item-card__price').text().trim().replace(/🍪|\.\d+|,/g, "")
        });
    });
    return new Response(JSON.stringify(items), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}