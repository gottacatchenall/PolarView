import { Router } from 'express';
import * as BeaconController from '../controllers/Beacon.controller';

const router = new Router();

router.route('/beaconDefinition').get(BeaconController.getBeaconDefinition);

export default router;
