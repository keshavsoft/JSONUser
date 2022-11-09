exports.CheckForUserNamePasswordFirm = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inUserName: "",
                inPassWord: "",
                inFirmName: ""
            }
        });
    } else {
        if (("KeshavSoft" in req) === false) {
            res.json({ KTF: false, KReason: "KeshavSoft not found in Request" })

        } else {
            if (("DataPk" in req.KeshavSoft) === false) {
                res.json({ KTF: false, KReason: "DataPk not found in KeshavSoft" })

            } else {
                if (("inUserName" in req.body) === false) {
                    res.json({ KTF: false, KReason: "inUserName not found in body" })

                } else {
                    if (("inPassWord" in req.body) === false) {
                        res.json({ KTF: false, KReason: "inPassWord not found in body" })

                    } else {
                        if (("inFirmName" in req.body) === false) {
                            res.json({ KTF: false, KReason: "inFirmName not found in body" })

                        } else {
                            next();
                        };
                    };
                };
            };
        };
    };
}; 
