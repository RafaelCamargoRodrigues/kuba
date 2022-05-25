import supabase from '@kuba/supabase'

export default async function (request) {
  const { slug } = request.params
  const { data, error } = await supabase
    .from('marca')
    .select('*, origem (*)')
    .eq('slug', slug)
    .single()

  return new Response(
    JSON.stringify({ data, error }),
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS'
      }
    }
  )
}
