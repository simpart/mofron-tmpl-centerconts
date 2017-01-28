/**
 * @file centerconts.js
 * @author simpart
 */

/**
 * @class CenterConts
 * @brief CenterContents Template Class
 */
mofron.tmpl.CenterConts = class extends mofron.tmpl.Base {
    
    /**
     * initialize member
     *
     * @param app_nm : (string) application name
     */
    constructor (app_nm) {
        try {
            super(app_nm);
            this.header    = null;
            this.conts_pnl = null;
            this.conts = new Array();
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
            this.base.addChild(this.getHeader());
            //this.base.addLayout(new mofron.layout.Padding('top',1));
            this.getContsPnl();
            for (var conts_elm in this.conts) {
                this.getContsPnl().addChild(conts_elm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    addConts (cont) {
        try {
            if ('object' !== typeof cont) {
                throw new Error('invalid parameter');
            }
            this.conts.addChild(cont);
            if (true === this.base.isRendered()) {
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
                hdr = mofron.comp.PageHeader;
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
            
            var cp_base1 = new mofron.comp.Base();
            var cp_base2 = new mofron.comp.Base();
            var cp_main  = new mofron.comp.Base();
            
            cp_base1.addLayout(new mofron.layout.Padding('top',1));
            this.base.addChild(cp_base1);
            
            var bg_clr = this.theme().get('Color',1);
            if (null === bg_clr) {
                bg_clr = new mofron.util.Color(240,240,240);
            }
            cp_base2.style('background',bg_clr.getStyle());
            cp_base2.setEffect(new mofron.effect.Backgd());
            cp_base2.addLayout(new mofron.layout.HrzCenter());
            cp_base1.addChild(cp_base2);
            
            cp_main.setEffect(new mofron.effect.Backgd());
            cp_main.setEffect(new mofron.effect.Shadow(20));
            cp_main.style(
                'background',
                new mofron.util.Color(255,255,255).getStyle()
            );
            cp_base2.addChild(cp_main);
            
            this.conts_pnl = cp_main;
            return this.conts_pnl;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
//    visible (flg, eff) {
//        try {
//            if (null === this.header) {
//                this.base.addChild(this.getHeader());
//                this.getContsPnl();
//            }
//            
//            var bg_clr = this.theme().get('Color',1);
//            if (null === bg_clr) {
//                bg_clr = new mofron.util.Color(240,240,240);
//            }
//            this.base.getChild(1).style(
//                'background',
//                bg_clr.getStyle()
//            );
//            
//            super.visible(flg,eff);
//        } catch (e) {
//            console.error(e.stack);
//            throw e;
//        }
//    }
}
