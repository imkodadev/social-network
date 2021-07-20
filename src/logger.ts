export default (type:string, source:string, message:string) => {

  switch (type) {
    case "error":
      console.log(`${process.uptime()}s  [error]  [${source}]  ${message}`);
    break;
    case "info":
      console.log(`${process.uptime()}s  [info]  [${source}]  ${message}`);
    break;
    case "success":
      console.log(`${process.uptime()}s  [success]  [${source}]  ${message}`);
    break;
    case "debug":
      console.log(`${process.uptime()}s  [debug]  [${source}]  ${message}`);
    break;
  }

}