export type LogWriter = (Title: string, Message: string) => void;

export class LogSource
{
  logID: string;
  writer: LogWriter;
  debugWriter: LogWriter;

  constructor(myID: string, myWriter: LogWriter, myDebugWriter: LogWriter)
  {
    this.logID = myID;
    this.writer = myWriter;
    this.debugWriter = myDebugWriter;

    if (!myWriter)
      throw new Error("Writer expected in LogSource.ctor");

    if (!myDebugWriter)
      throw new Error("DebugWriter expected in LogSource.ctor");
  }

  write(message: string)
  {
    this.writer(this.logID, message);
  }

  writeDebug(message: string)
  {
    this.debugWriter(this.logID, message);
  }
}
