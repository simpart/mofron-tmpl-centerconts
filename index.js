/**
 * @file centerconts.js
 * @author simpart
 */
require('mofron-effect-backgd');
require('mofron-layout-hrzcenter');
require('mofron-layout-padding');
require('mofron-effect-shadow');
require('mofron-comp-header-title');

/**
 * @class CenterConts
 * @brief CenterContents Template Class
 */
mofron.tmpl.CenterConts = class extends mofron.Template {
    
    /**
     * initialize member
     *
     * @param app_nm : (string) application name
     */
    constructor (app_nm) {
        try {
            super();
            this.name('CenterConts');
            
            this.header    = null;
            this.conts_pnl = null;
            this.conts = new Array();
            
            this.prmOpt(app_nm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initTmplConts (prm) {
        try {
            if (null !== prm) {
                if ('string' !== (typeof prm)) {
                    throw new Error('invalid parameter');
                }
                this.title(prm);
            }
            this.base().addChild(this.getHeader());
            var pnl = this.getContsPnl();
            for (var conts_elm in this.conts) {
                pnl.addChild(this.conts[conts_elm]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    addChild (cont) {
        try {
            if ('object' !== typeof cont) {
                throw new Error('invalid parameter');
            }
            this.conts.push(cont);
            if (true === this.base().isRendered()) {
                this.getContsPnl().addChild(cont);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * get header component
     */
    getHeader () {
        try {
            if (null !== this.header) {
                return this.header;
            }
            var ttl = this.title();
            if (null === ttl) {
                ttl = '';
            }
            var hdr = this.theme().getComp('Header');
            if (null === hdr) {
                hdr = mofron.comp.header.Title;
            }
            this.header = new hdr(ttl);
            return this.header;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    getContsPnl () {
        try {
            if (null !== this.conts_pnl) {
                return this.conts_pnl;
            }
            
            var bg_clr = this.theme().get('Color',1);
            if (null === bg_clr) {
                bg_clr = new mofron.Color(240,240,240);
            }
            
            var conts = new mofron.Component({
                            effect : new mofron.effect.Shadow(20)
                        });
            conts.style(
                'background',
                new mofron.Color(255,255,255).getStyle()
            );
            conts.style('height', '100%');
            conts.style('width' , '100%');
            
            this.base().child(
                new mofron.Component({
                    layout : new mofron.layout.Padding('top',1),
                    child  : new mofron.Component({
                                 style  : new mofron.Param('background',bg_clr.getStyle()),
                                 effect : new mofron.effect.Backgd(),
                                 layout : new mofron.layout.HrzCenter(),
                                 child  : new mofron.Component({
                                              child  : conts
                                          })
                             })
                })
            );
            this.conts_pnl = conts;
            return this.conts_pnl;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.tmpl.CenterConts;
