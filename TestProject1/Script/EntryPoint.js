//USEUNIT EntryPointPage
//USEUNIT NetworkTreeViewPage
//USEUNIT GenericMethods

function FDMGR4876_4877(){
  Log.AppendFolder("FDMGR4876_4877 - Save History")
  try{
  
  clickOnDevice(Project.Variables.Device);
  clickSaveHistoryHyperlink()
  input = Project.Variables.Device
  let parts = input.split("|");
  let lastValue = parts[parts.length - 1];
  fillSaveHistoryPopup(lastValue + aqDateTime.Now()/1000)
  handleFdmConfigurationPopup()
  handleSaveHistoryCompletion()
  }
  
  catch(error){
    Log.Error("FDMGR4876_4877 :- " + error.message )
  }
  finally{
    Log.PopLogFolder()
  }
  
}


// =====================================================================
// Author:        Bharath
// Function:      DeviceParam
// Description:   Validates existence and text of various WPF hyperlinks 
//                under a selected device context.
// Created On:    23-Jul-2025
// Modified On:   23-Jul-2025
// =====================================================================

function DeviceParam() {
  Log.AppendFolder("DeviceParam - Validate Device Hyperlink Controls");

  try {
    // 🖱️ Click on the specified device
    clickOnDevice(Project.Variables.Device);
    Log.Message("Clicked on device: " + Project.Variables.Device);

    let adornerDecorator = Aliases.HCMClient.ClientMainWindow.MdiClient
      .EntryPointTabPage.EntryPointsTabPage.HwndSource_AdornerDecorator.AdornerDecorator;

    // ✅ Validate key hyperlink labels
    aqObject.CheckProperty(adornerDecorator.HyperlinkSaveHistoryRecord, "WPFControlText", cmpEqual, "Save History Record");
    aqObject.CheckProperty(adornerDecorator.HyperlinkSaveAsOfflineTemplate, "WPFControlText", cmpEqual, "Save as Offline Template");
    aqObject.CheckProperty(adornerDecorator.HyperlinkExport, "WPFControlText", cmpEqual, "Export");
    aqObject.CheckProperty(adornerDecorator.HyperlinkPrint, "WPFControlText", cmpEqual, "Print");
    aqObject.CheckProperty(adornerDecorator.HyperlinkNotifications, "WPFControlText", cmpEqual, "Notifications");
    aqObject.CheckProperty(adornerDecorator.HyperlinkNotifications, "WPFControlText", cmpEqual, "Advanced Configuration");
    aqObject.CheckProperty(adornerDecorator.HyperlinkNotifications, "WPFControlText", cmpEqual, "FDM Device Status");
    aqObject.CheckProperty(adornerDecorator.HyperlinkNotifications, "WPFControlText", cmpEqual, "FDM Device properties");
    Log.Message("All device hyperlinks validated successfully.");
    CloseWindow()

  } catch (error) {
    Log.Error("Exception in DeviceParam: " + error.message);
  } finally {
    Log.PopLogFolder();
  }
}

