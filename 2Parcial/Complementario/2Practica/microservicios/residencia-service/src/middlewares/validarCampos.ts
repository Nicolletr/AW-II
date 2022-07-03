import { validationResult } from "express-validator";
import { Response, Request, NextFunction} from "express"
const validacion = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json(errors);
    next();
  }
  next();
};

export {
  validacion,
};

