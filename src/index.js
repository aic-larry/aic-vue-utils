export function testConsole(){

  console.log('aic-vue-utils console...!')
}
export const testBabel = () => {
  const info = {
    cli:'vue',
  }
  const o = info?.cli??'--'
  console.log(o)
}