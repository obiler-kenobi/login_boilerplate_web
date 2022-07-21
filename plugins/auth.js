export default function ({ $auth }) {
  $auth.onError((name) => {
    return console.log(name)
  })
}
