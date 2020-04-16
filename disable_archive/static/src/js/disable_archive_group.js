odoo.define('disable_archive.BasicView', function (require) {
"use strict";

var session = require('web.session');
var BasicView = require('web.BasicView');
BasicView.include({
        init: function(viewInfo, params) {
            var self = this;
            this._super.apply(this, arguments);
            console.log('@@@@@@@@@@@@',this.controllerParams.modelName)
            var model_partner = this.controllerParams.modelName == 'res.partner' ? 'True' : 'False';
            console.log('#####',model_partner)
            if(model_partner) {
                session.user_has_group('disable_archive.group_archive').then(function(has_group) {
                    if(!has_group) {
                        self.controllerParams.archiveEnabled = 'False' in viewInfo.fields;
                    }
                });
            }

            var model_product_template = this.controllerParams.modelName == 'product.template' ? 'True' : 'False';
            console.log('11111',model_product_template)
            if(model_product_template) {
            console.log("3333333",session.user_has_group('disable_archive.group_archive'))
                session.user_has_group('disable_archive.group_archive').then(function(has_group) {
                    console.log("44",has_group)
                    if(!has_group) {

                        self.controllerParams.archiveEnabled = 'False' in viewInfo.fields;
                    }
                });
            }


            var model_product_product = this.controllerParams.modelName == 'product.product' ? 'True' : 'False';
            console.log('222222',model_product_product)
            if(model_product_product) {
                session.user_has_group('disable_archive.group_archive').then(function(has_group) {
                    if(!has_group) {
                        self.controllerParams.archiveEnabled = 'False' in viewInfo.fields;
                    }
                });
            }


            var model_res_users = this.controllerParams.modelName == 'res.users' ? 'True' : 'False';
            console.log('666666',model_res_users)
            if(model_res_users) {
                session.user_has_group('disable_archive.group_archive').then(function(has_group) {
                    if(!has_group) {
                        self.controllerParams.archiveEnabled = 'False' in viewInfo.fields;
                    }
                });
            }



            var model_mrp_bom = this.controllerParams.modelName == 'mrp.bom' ? 'True' : 'False';
            console.log('77777',model_mrp_bom)
            if(model_mrp_bom) {
                session.user_has_group('disable_archive.group_archive').then(function(has_group) {
                    if(!has_group) {
                        self.controllerParams.archiveEnabled = 'False' in viewInfo.fields;
                    }
                });
            }
        },
});
});