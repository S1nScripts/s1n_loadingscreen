local function sendReactMessage(action, data)
    SendNUIMessage({
      action = action,
      data = data
    })
  end

local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    sendReactMessage("setVisible", shouldShow)
    sendReactMessage("setConfig", S1nScripts.LoadingScreen.Config)
end

Citizen.CreateThread(function()
    toggleNuiFrame(true)
end)