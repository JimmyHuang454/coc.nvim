import { path, os } from './node'
import { version } from '../../package.json'
import { getConditionValue } from './index'

export const VERSION = version
export const isVim = process.env.VIM_NODE_RPC == '1'
export const APIVERSION = 32
export const CONFIG_FILE_NAME = 'coc-settings.json'
export const userConfigFile = path.join(path.normalize(process.env.COC_VIMCONFIG) ?? path.join(os.homedir(), '.vim'), CONFIG_FILE_NAME)
export const pluginRoot = getConditionValue(path.dirname(__dirname), path.resolve(__dirname, '../..'))
export const watchmanCommand = 'watchman'
