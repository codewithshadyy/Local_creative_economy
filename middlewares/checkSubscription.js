

const Creator = require("../models/Creator")

exports.checkSubscription = async (
    req,
    res,
    next
) => {

    const user = await Creator.findById(
        req.creator.id
    )

    if (
        user.subscription.status !== "paid"
    ) {
        return res.status(403).json({
            message:
                "Subscription required to post"
        })
    }

    next()
}


