// obtain plugin
var cc = initCookieConsent();

// run plugin with your configuration
cc.run({
    current_lang: 'de',
    autoclear_cookies: true,                   // default: false
    theme_css: 'node_modules/vanilla-cookieconsent/dist/cookieconsent.css',  // 🚨 replace with a valid path
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'de': {
            consent_modal: {
                title: 'Wir verwenden Cookies!',
                description: 'Diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie damit interagieren. Letztere werden erst nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Cookie-Einstellungen selbst verwalten.</button>',
                primary_btn: {
                    text: 'Alle akzeptieren',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Alle ablehnen',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie-Einstellungen',
                save_settings_btn: 'Einstellungen speichern',
                accept_all_btn: 'Alle akzeptieren',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie-Nutzung 📢',
                        description: 'Wir verwenden Cookies, um die grundlegenden Funktionen der Website sicherzustellen und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich jederzeit an- oder abmelden möchten. Weitere Einzelheiten zu Cookies und anderen sensiblen Daten finden Sie vollständig <a href="pages/datenschutzerklärung/datenschutzerklärung.html" target="_blank" class="cc-link">Datenschutzerklärung</a>.'
                    }, {
                        title: 'Notwendige Cookies 🍪',
                        description: 'Diese Cookies sind für das reibungslose Funktionieren der Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Performance- und Analyse-Cookies ⚙',
                        description: 'Diese Cookies ermöglichen es der Website, sich an die Entscheidungen zu erinnern, die Sie in der Vergangenheit getroffen haben',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'description ...',
                            }
                        ]
                    }, {
                        title: 'Werbe- und Targeting-Cookies 🎯',
                        description: 'Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besucht und auf welche Links Sie geklickt haben. Alle Daten sind anonymisiert und können nicht dazu verwendet werden, Sie zu identifizieren',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false
                        }
                    }, {
                        title: 'Mehr Informationen',
                        description: 'Bei Fragen zu unserer Richtlinie zu Cookies und Ihren Auswahlmöglichkeiten wenden Sie sich bitte an <a class="cc-link" target="_blank" href="pages/kontakt/kontakt.html"> uns </a>.',
                    }
                ]
            }
        }
    }
});