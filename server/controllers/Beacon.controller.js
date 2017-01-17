import Beacon from '../models/Beacon';

export function getBeaconDefinition(req, res) {
  Beacon.find().exec((err, items) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json( items );
  });
}
