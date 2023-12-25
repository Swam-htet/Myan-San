let apiURL = "http://localhost:4000/api";
export let endpoints = {
    routes: {
        default: apiURL + "/routes",
    },
    tickets: {
        default: apiURL + "/tickets",
        createTicket: apiURL + "/tickets",
    },
    staff: {
        default: apiURL + "/staff",
        login: apiURL + "/staff/login"
    },
    buses: {
        default: apiURL + "/buses"
    },
    companies: {
        default: apiURL + "/companies"
    },
    towns: {
        default: apiURL + "/towns"
    }
}