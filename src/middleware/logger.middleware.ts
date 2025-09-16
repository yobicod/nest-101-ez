import { Request, Response, NextFunction } from 'express';
// Function middleware
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request... (Midleware Layer)`);
  next();
}
