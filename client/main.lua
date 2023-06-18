local function sendReactMessage(action, data)
    SendNUIMessage({
      action = action,
      data = data
    })
  end

local function toggleNuiFrame(shouldShow)
    SetNuiFocus(shouldShow, shouldShow)
    sendReactMessage("setVisible", shouldShow)
end

-- Set config for the React part
local sentConfig = false

Citizen.CreateThread(function()
    while not sentConfig do
        sendReactMessage("setConfig", S1nScripts.LoadingScreen.Config)
        Citizen.Wait(1000)
    end

    toggleNuiFrame(true)

    Debug("setConfig sent")
end)

RegisterNUICallback('dataSent', function()
    sentConfig = true
end)