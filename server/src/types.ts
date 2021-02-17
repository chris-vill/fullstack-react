import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core';

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}

/*

If you get an error around 1:52:00 because of req.session.userId that's because session type was probably removed from express. So try this at     types.ts to get Session from express-session instead:

import { EntityManager, IDatabaseDriver, Connection } from '@mikro-orm/core'
import { Request, Response } from 'express'
import { Session, SessionData } from 'express-session'

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
  req: Request & { session: Session & Partial<SessionData> & { userId?: number } }
  res: Response
}

*/
