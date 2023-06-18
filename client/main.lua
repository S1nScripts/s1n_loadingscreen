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

CreateThread(function()
    toggleNuiFrame(true)
end)
