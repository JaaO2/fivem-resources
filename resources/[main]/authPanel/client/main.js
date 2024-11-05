const open = () => {    
    const cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
    SetCamCoord(cam, -361.3, -301.3, 100.0);
    SetCamRot(cam, 0,0,0)
    SetCamActive(cam, true);
    RenderScriptCams(true, false, 0, true, false);
    
    const cam2 = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
    SetCamCoord(cam2, -361.3, -1801.3, 140.0);
    SetCamRot(cam2, 0,0,180)
    SetCamActiveWithInterp(cam2, cam, 20*3600, true, true);

    SetNuiFocus(true, true);   
    emitNet('sendWebsiteURL');
}
AddEventHandler('login:open', open)

onNet('receiveWebsiteURL', (url) => {
    SendNUIMessage({
        action: 'url',
        url: url
    });
});