import { Router } from 'express';
import * as collectionController from '../controllers/collectionController';
const router = Router();

router.get('/', collectionController.getCollections);

export default router;
