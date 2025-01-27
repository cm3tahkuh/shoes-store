import axios from 'axios';
import { endpoints } from '../../config';

export async function GET() {
  const TOKEN_API = process.env.TOKEN_API;
  
  try {

    const response = await axios.get(endpoints.products, {
      headers: {
        Authorization: `Bearer ${TOKEN_API}`,
      },
    });
    

    return new Response(JSON.stringify(response.data.data), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Ошибка при получении данных' }), {
      status: 500,
    });
  }
}
