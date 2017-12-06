/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  IonicNativePlugin
} from '@ionic-native/core';

/**
 * @name Mozaik List View
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { MozaikListView } from '@ionic-native/mozaik-list-view';
 *
 *
 * constructor(private mozaikListView: MozaikListView) { }
 *
 * ...
 *
 *
 * this.mozaikListView.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'MozaikListView',
  plugin: '', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.mozaiklistview', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/millerf/ionic-native#mozaik-listview', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class MozaikListView extends IonicNativePlugin {

  @Cordova({ sync: true })
  MzkPluginInit(args: any): any {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  @Cordova({ sync: true })
  MzkPluginSetJSON(args: any): any {
    return; // We add return; here to avoid any IDE / Compiler errors
  }


  @Cordova({ sync: true })
  MzkPluginKill(args: any): any {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
