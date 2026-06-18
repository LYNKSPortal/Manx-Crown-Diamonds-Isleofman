// ============================================================
//  MANX CROWN DIAMONDS — PRICE CONFIGURATION
//  Edit this file to update prices across the entire website.
//
//  HOW IT WORKS:
//  Each product has a "base" price (the starting price shown).
//  Add-on options adjust the price up (+) or down (-) from the base.
//  0 = no change (use for the "Base" option in each section).
//
//  After editing, save this file. Prices will update automatically
//  on every product page — you do NOT need to edit each page.
// ============================================================

const PRICES = {

    // ── DIAMOND RINGS ──────────────────────────────────────
    //
    //  Standard ring pricing:
    //    18K (any colour) + 1ct  =  £1,650  (base)
    //    9K  (any colour) + 1ct  =  £1,350  (-£300)
    //    Platinum         + 1ct  =  £1,750  (+£100)
    //
    //  Carat add-ons (same across all rings):
    //    1.0ct = Base  |  1.5ct = +£400  |  2.0ct = +£800
    //    3.0ct = +£1,800  |  4.0ct = +£2,800  |  5.0ct = +£3,800
    //    6.0ct = +£4,900  |  7.0ct = +£6,000  |  8.0ct = +£7,000

    'gold-trilogy-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'alexandrite-trilogy-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
    },

    'gold-cluster-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
    },

    'elongated-cushion-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
    },

    'gold-melee-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'radiant-gold-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'princess-gold-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'princess-trilogy-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'gold-celtic-ring': {
        base: 1200,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -400,
            '9k-yellow':  -400,
            '9k-rose':    -400,
            'platinum':   200
        },
        //  9K  = £800, 18K = £1,200, Platinum = £1,400
        //  Amethyst carat pricing: +£50/ct above 1ct (1–4ct only) — handled in HTML
    },

    'trilogy-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'trilogy-round-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'pink-diamond-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        }
    },

    'oval-ring-with-size': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'oval-diamond-melee-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'emerald-ring': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'radiant-baguette-ring': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'eternity-diamond-ring': {
        base: 1250,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -450,
            '9k-yellow':  -450,
            '9k-rose':    -450,
            'platinum':   0
        }
    },

    'baguette-eternity-band': {
        base: 1250,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -450,
            '9k-yellow':  -450,
            '9k-rose':    -450,
            'platinum':   0
        }
    },

    'princess-band': {
        base: 1550,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'diamond-band': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'hawaiian-ring': {
        base: 1450,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   0
        }
    },

    'melee-band': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    'cushion-solitaire': {
        base: 1650,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   100
        },
        carats: {
            '1.0': 0,    '1.5': 400,  '2.0': 800,
            '3.0': 1800, '4.0': 2800, '5.0': 3800,
            '6.0': 4900, '7.0': 6000, '8.0': 7000
        },
        // clarity pricing is percentage-based (VS1: 2.5%, VVS2: 3.5%, VVS1: 5%) — computed dynamically in JS
    },

    // ── BRACELETS ──────────────────────────────────────────

    'cuban-bracelet': {
        base: 500,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        200,
            'sterling-silver': -100
        }
    },

    'cuban-diamond-bracelet': {
        base: 1000,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -200,
            '9k-yellow':  -200,
            '9k-rose':    -200
        }
    },

    'diamond-bangle': {
        base: 600,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        200,
            'sterling-silver': -100
        }
    },

    'three-bracelet': {
        base: 400,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        200,
            'sterling-silver': -100
        }
    },

    // ── NECKLACES ──────────────────────────────────────────

    'pear-necklace': {
        base: 950,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -100,
            '9k-yellow':  -100,
            '9k-rose':    -100,
            'platinum':   200
        },
        carats: {
            '0.5': 0, '1.0': 400, '1.5': 800,
            '2.0': 1400, '3.0': 2500
        }
    },

    'cuban-chain': {
        base: 600,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        200,
            'sterling-silver': -100
        }
    },

    'gold-rope-necklace': {
        base: 450,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -50,
            '9k-yellow':  -50,
            '9k-rose':    -50
        }
    },

    'initial-necklace': {
        base: 350,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        150,
            'sterling-silver': -100
        }
    },

    'love-necklace': {
        base: 400,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        150,
            'sterling-silver': -100
        }
    },

    'three-legs-necklace': {
        base: 350,
        metals: {
            '18k-white':       0,
            '18k-yellow':      0,
            '18k-rose':        0,
            '9k-white':        -50,
            '9k-yellow':       -50,
            '9k-rose':         -50,
            'platinum':        150,
            'sterling-silver': -100
        }
    },

    // ── EARRINGS ───────────────────────────────────────────

    'diamond-studs': {
        base: 400,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -75,
            '9k-yellow':  -75,
            '9k-rose':    -75,
            'platinum':   0
        },
        carats: {
            '0.25': 0,   '0.5': 300,  '0.75': 450,
            '1.0': 600,  '1.5': 950,  '2.0': 1400, '3.0': 2850
        }
    },

    'hoop-earrings': {
        base: 1100,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -300,
            '9k-yellow':  -300,
            '9k-rose':    -300,
            'platinum':   0
        },
        carats: {
            '0.25': 0,   '0.5': 200,   '0.75': 450,
            '1.0': 700,  '1.25': 950,  '1.5': 1200
        }
    },

    'earrings-link': {
        base: 1750,
        metals: {
            '18k-white':  0,
            '18k-yellow': 0,
            '18k-rose':   0,
            '9k-white':   -550,
            '9k-yellow':  -550,
            '9k-rose':    -550,
            'silver':     -1475
        }
    }

};

// ============================================================
//  INTERNAL — do not edit below this line
// ============================================================

function _fmtPrice(val) {
    if (val === 0) return 'Base';
    return (val > 0 ? '+£' : '-£') + Math.abs(val).toLocaleString();
}

function initFromPrices(productId, basePriceSetter) {
    const cfg = PRICES[productId];
    if (!cfg) return;

    if (typeof basePriceSetter === 'function') basePriceSetter(cfg.base);

    if (cfg.metals) {
        document.querySelectorAll('[data-metal]').forEach(el => {
            const v = cfg.metals[el.dataset.metal];
            if (v !== undefined) el.dataset.price = v;
        });
    }

    if (cfg.carats) {
        document.querySelectorAll('[data-carat]').forEach(el => {
            const v = cfg.carats[el.dataset.carat];
            if (v !== undefined) {
                el.dataset.price = v;
                const span = el.querySelector('.diamond-price');
                if (span) span.textContent = _fmtPrice(v);
            }
        });
    }

    if (cfg.clarity) {
        document.querySelectorAll('[data-clarity]').forEach(el => {
            const v = cfg.clarity[el.dataset.clarity];
            if (v !== undefined) {
                el.dataset.price = v;
                const span = el.querySelector('.diamond-price');
                if (span) span.textContent = _fmtPrice(v);
            }
        });
    }
}
