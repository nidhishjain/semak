# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
import random



class SaleCoupon(models.Model):
    _inherit = 'sale.coupon'

    @api.model
    def _generate_new_code(self):
        """Generate a 20 char long pseudo-random string of digits for barcode
        generation.

        A decimal serialisation is longer than a hexadecimal one *but* it
        generates a more compact barcode (Code128C rather than Code128A).

        Generate 8 bytes (64 bits) barcodes as 16 bytes barcodes are not
        compatible with all scanners.
         """

        return str(random.getrandbits(20))

    code = fields.Char(default=_generate_new_code, required=True, readonly=True)