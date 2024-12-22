abstract class Logger
{
    abstract log ( message: string ): void
    printDate (date: Date): void
    {
        this.log(date.toTimeString())
    }
}
class WithDate extends Logger
{
    log ( message: string ): void
    {
        if(true)console.log( message)
    }
    logWithDate (message: string): void
    {
        this.printDate(new Date())
        this.log(message)
    }
}

const withDate = new WithDate()
withDate.logWithDate('Abstract class and his method log')