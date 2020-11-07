/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { navigate } from "gatsby";

const legalRoutes = ["", "/settings"]

export const onPreRouteUpdate = ({ location, prevLocation }) => {
    const r = location.pathname.replace(/\/$/, "");

    if(!legalRoutes.includes(r)) navigate("/");
}