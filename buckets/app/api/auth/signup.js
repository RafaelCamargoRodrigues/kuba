import supabase from '@kuba/supabase'

export default async function (request, response) {
  const { email, password } = JSON.parse(request.body)
  const { data, error } = await supabase.auth.signUp({ email, password })

  response.json({ data, error })
}
