//let LocalUserName = req.body.inUserName;
//let LocalPassWord = req.body.inPassword;
exports.LoginCheck = (req, res, next) => {
    console.log("req.body", req.body);
    if (Object.keys(req.body).length === 0) {
        res.json({
            KTF: false,
            KReason: "post requst body should contain : ",
            body: {
                inUserName: "",
                inPassword: ""
            },
            originalUrl: req.originalUrl
        });
    } else {

    };
};