//Salman Ameer
//Multi-Language Injection
//Jugar # 2

var win = new Window("palette","Multi Language",undefined); // Main Window
win.orientation = "column";

var langDropdown = win.add("dropdownlist",undefined,undefined,{items: ["English","اُردو","français","العربية"]}); // Dropdown list for Languages Name
langDropdown.selection = 0; // by Default it set to first Array value in Dropdown list

var MasterGroupStacker = win.add("group",undefined); // Main Window Stacker Group for Storing Multi Lang Groups
MasterGroupStacker.orientation = "stack";
//============================================

//English
var  GroupEng = MasterGroupStacker.add("group",undefined);
GroupEng.orientation = "column";
var statictextEng = GroupEng.add("statictext",undefined,"Color");
var ColorGroupEng = GroupEng.add("group",undefined);
var colorRedEng = ColorGroupEng.add("radiobutton",undefined,"Red");
var colorBlueEng = ColorGroupEng.add("radiobutton",undefined,"Blue");
var colorGreenEng = ColorGroupEng.add("radiobutton",undefined,"Green");
var acceptcolorEng = GroupEng.add("button",undefined,"Select");
GroupEng.visible = true; // by  Default Showing English Language


//Urdu
var  GroupUrd = MasterGroupStacker.add("group",undefined);
GroupUrd.orientation = "column";
var statictextUrd = GroupUrd.add("statictext",undefined,"رنگ");
var ColorGroupUrd = GroupUrd.add("group",undefined);
var colorRedUrd = ColorGroupUrd.add("radiobutton",undefined,"لال");
var colorBlueUrd = ColorGroupUrd.add("radiobutton",undefined,"نيلا");
var colorGreenUrd = ColorGroupUrd.add("radiobutton",undefined,"سبز");
var acceptcolorUrd = GroupUrd.add("button",undefined,"اِنتخاب");
GroupUrd.visible = false; // by  Default not Showing Urdu Language

//français
var  GroupFre = MasterGroupStacker.add("group",undefined);
GroupFre.orientation = "column";
var statictextFre = GroupFre.add("statictext",undefined,"Couleur");
var ColorGroupFre = GroupFre.add("group",undefined);
var colorRedFre = ColorGroupFre.add("radiobutton",undefined,"rouge");
var colorBlueFre = ColorGroupFre.add("radiobutton",undefined,"Bleu");
var colorGreenFre = ColorGroupFre.add("radiobutton",undefined,"Vert");
var acceptcolorFre = GroupFre.add("button",undefined,"Sélectionner");
GroupFre.visible = false; // by  Default not Showing French Language


//Arabic
var  GroupArab = MasterGroupStacker.add("group",undefined);
GroupArab.orientation = "column";
var statictextArab = GroupArab.add("statictext",undefined,"اللون");
var ColorGroupArab = GroupArab.add("group",undefined);
var colorRedArab = ColorGroupArab.add("radiobutton",undefined,"أحمر");
var colorBlueArab = ColorGroupArab.add("radiobutton",undefined,"أزرق");
var colorGreenArab = ColorGroupArab.add("radiobutton",undefined,"أخضر");
var acceptcolorArab = GroupArab.add("button",undefined,"اختار");
GroupArab.visible = false; // by  Default not Showing Arabic Language

//============================================


////////////////// onChange UI //////////////////////
langDropdown.onChange = function(){
if(langDropdown.selection == 0){ // English
    GroupEng.visible = true;
    GroupUrd.visible = false;
    GroupFre.visible = false;
    GroupArab.visible = false;
    }else if(langDropdown.selection == 1){ // Urdu
        GroupEng.visible = false;
        GroupUrd.visible = true;
        GroupFre.visible = false;
        GroupArab.visible = false;
        }else if(langDropdown.selection == 2){ // French
        GroupEng.visible = false;
        GroupUrd.visible = false;
        GroupFre.visible = true;
        GroupArab.visible = false;
        }else if(langDropdown.selection == 3){ // Arabic
        GroupEng.visible = false;
        GroupUrd.visible = false;
        GroupFre.visible = false;
        GroupArab.visible = true;
        }else{ // when Selection of Dropdown list is empty OR not defined in this Else If Condition
    alert("Select Language");
    }    
    }

win.center();
win.show();