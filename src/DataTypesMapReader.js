/*
 * This file is a part of "NMIG" - the database migration tool.
 *
 * Copyright (C) 2016 - present, Anatoly Khaytovich <anatolyuss@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program (please see the "LICENSE.md" file).
 * If not, see <http://www.gnu.org/licenses/gpl.txt>.
 *
 * @author Anatoly Khaytovich <anatolyuss@gmail.com>
 */
'use strict';

const fs = require('fs');

/**
 * Reads "./data_types_map.json" and converts its json content to js object.
 * Appends this object to "FromMySQL2PostgreSQL" instance.
 *
 * @param {Conversion} self
 *
 * @returns {Promise}
 */
module.exports = self => {
    return new Promise(resolve => {
        fs.readFile(self._dataTypesMapAddr, (error, data) => {
            if (error) {
                console.log('\t--[readDataTypesMap] Cannot read "DataTypesMap" from ' + self._dataTypesMapAddr);
                process.exit();
            }

            self._dataTypesMap = JSON.parse(data);
            console.log('\t--[readDataTypesMap] Data Types Map is loaded...');
            resolve(self);
        });
    });
};
