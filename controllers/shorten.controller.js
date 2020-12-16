const Url = require("../models/Url");
const NanoId = require('nanoid');
const homePage = require("../views/home.view");
const errorPage = require("../views/404.view");

exports.shorten = async(request, response) => {
    try {
        const long_url = request.body.long_url;
        const short_route = NanoId.nanoid(5);
        if (long_url && short_route) {
            const newUrl = new Url({
                long_url,
                short_route,
            });
            const myUrl = await newUrl.save();
            response.status(201).json(myUrl);
        } else {
            response.status(400).json({
                success: false,
                message: "url could not be shortened",
            });
        }
    } catch (error) {
        // console.log(error);
        response.status(500).json(error);
    }
}

exports.redirect = async(request, response) => {
    try {
        const route = request.url.replace(/\//g, '');
        if (route === "home" || route.length === 0) response.send(homePage.home());
        else if (route === "docs") response.redirect("https://documenter.getpostman.com/view/8570881/TVsrEUA3");
        else {
            const myUrl = await Url.findOne({ short_route: route });
            if (!myUrl) response.send(errorPage.error());
            else {
                response.redirect(myUrl.long_url);
            }
        }
    } catch (error) {
        response.status(500).json(error);
    }
}
