import { Router } from 'express';
import * as DataController from '../controllers/Data.controller';

const router = new Router();

router.route('/data/:fieldName').get(DataController.getItemData);


export default router;
