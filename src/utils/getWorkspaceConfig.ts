import * as vscode from "vscode"
import * as path from "path"
import fs from "fs"

/** 获取工作区qiufen配置 */
function getWorkspaceConfig(tryCatchCallback?: VoidFunction) {
  const workspaceRootPath = vscode.workspace.workspaceFolders?.[0].uri.fsPath // 工作区根目录
  const qiufenConfigPath = path.join(workspaceRootPath!, "qiufen.config.js")
  const isExistConfigFile = fs.existsSync(qiufenConfigPath)
  const jsonSettings = vscode.workspace.getConfiguration("graphql-qiufen-pro")

  let qiufenConfig: GraphqlKitConfig | undefined
  let port: number | undefined
  let url: string | undefined
  if (isExistConfigFile) {
    /** 去除require缓存 */
    delete eval("require.cache")[qiufenConfigPath]
    try {
      qiufenConfig = eval("require")(qiufenConfigPath) as GraphqlKitConfig
    } catch (error) {
      tryCatchCallback?.()
      throw error
    }
    port = qiufenConfig.port
    url = qiufenConfig.endpoint.url
  } else {
    port = jsonSettings?.port
    url = jsonSettings?.endpointUrl
  }

  if (!port) {
    throw vscode.window.showErrorMessage("请在项目根目录 .vscode/settings.json 中配置port！！！")
  }
  if (!url) {
    throw vscode.window.showErrorMessage("请在项目根目录 .vscode/settings.json 中配置schema地址！！！")
  }

  return { workspaceRootPath, qiufenConfigPath, isExistConfigFile, port, url, qiufenConfig }
}

export default getWorkspaceConfig
