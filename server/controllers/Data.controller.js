import Data from '../models/Data';

export function getItemData(req, res) {
    var fieldName = req.params.fieldName;
    var fields = {
        "SYS_0_EPOCH":true,
    }
    fields[fieldName] = true;
    Data.find("", fields, {"sort": "SYS_0_EPOCH"}).exec((err, items) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json( items );
    });
}
