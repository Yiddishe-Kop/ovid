var item = {
  DATEDUE: "08/11/2019",
  DATENOW: "07/11/2019",
  ENTRYTITLE: "Some panel",
  ENTRYDESC: "Zombie ipsum",
  ENTRYPRICE: "$$$$",
  ENTRYWHEN: "06/22/2019",
  NOTE: "Thanks!",
  PAYINFO: "payment@inventsable.cc",
  PAYTOTAL: "$$$$$",
  ID: "1005",
  CLINET: "CLIENT HERE"
};

function assignTextFromItem(item) {
  for (var i = 0; i < app.activeDocument.textFrames.length; i++) {
    var active = app.activeDocument.textFrames[i];
    if (active.name) {
      var newname = active.name.replace("#", "");
      active.contents = item[newname];
      console.log(active.name + " " + item[newname]);
    }
  }
}

function resetAllTemplateText() {
  for (var i = 0; app.activeDocument.textFrames.length; i++) {
    var active = app.activeDocument.textFrames[i];
    if (active.name) active.contents = "xxxx";
  }
}

assignTextFromItem();
// resetAllTemplateText();