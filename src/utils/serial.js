// 串行执行若干次异步函数
export const runSerial = async (f, time = 1) => {
  const temp = []
  for (let i = 0; i < time; i++) temp.push(await f())
}
