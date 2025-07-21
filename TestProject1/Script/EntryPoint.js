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


