/*
  Parser del XML que nos llega como entrada, ya sea desde un servicio o como sea
*/

let xml =' <escenario id="temp" userId="0" name="Vaq TREINTA Y SEIS" private="false"> '+
' <earlyWeaning enable="false" suministro="5"> '+
' <earlyWeaningMob calfDestiny="beef_finishing" calfDietBProtein="10" calfDietIntake="2" calfDietDigest="85" calfDietDRProtein="8" umbralBcs="4" enable="false" mobId="1"/> '+
' </earlyWeaning> '+
' <otherOportunityToEmptyCows enable="false"/> '+
' <recetas> '+
' <receta id="1" name="Past Bajo" years="5"> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="10" number="1"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="10" number="2"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="10" number="3"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="10" number="4"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="10" number="5"/> '+
' </receta> '+
' <receta id="3" name="Camp Nat Salado" years="5"> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="3" number="1"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="3" number="2"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="3" number="3"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="3" number="4"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="3" number="5"/> '+
' </receta> '+
' <receta id="4" name="Camp  Nat Dulce" years="5"> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="2" number="1"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="2" number="2"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="2" number="3"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="2" number="4"/> '+
' <years December="1" November="1" October="1" September="1" August="1" July="1" June="1" May="1" April="1" March="1" February="1" January="1" contenido="2" number="5"/> '+
' </receta> '+
' <receta id="2" name="Sorgo Dife" years="2"> '+
' <years December="11" November="11" October="11" September="11" August="12" July="12" June="12" May="12" April="12" March="12" February="12" January="12" contenido="ampliar" number="1"/> '+
' <years December="12" November="12" October="12" September="12" August="11" July="11" June="11" May="11" April="11" March="11" February="11" January="11" contenido="ampliar" number="2"/> '+
' </receta> '+
' </recetas> '+
' <cash_crops/> '+
' <crop_stubbles/> '+
' <pastureType> '+
    ' <pasture pastureDigestStem="64" pastureBProteinDead="3" pastureBProteinLeaf="10" pastureDRProteinStem="2.5" pastureDRProteinLeaf="5" pastureDRProteinDead="1" pastureBProteinStem="5" pastureDigestLeaf="72" pastureDigestDead="45" desc="Campo Nat" name="Dulce" rot_id="2" id="1"> '+
        ' <pastureAccumRateMean  December="16.4" November="20.7" October="16.9" September="10.9" August="7.5" July="6.9" June="6.6" May="7.6" April="11" March="13.9" February="15.3" January="14.5"/> '+
        ' <pastureAccumRateStdDev December="5.3" November="8.1" October="4.4" September="2.9" August="2.1" July="1.4" June="1.3" May="1.1" April="1.9" March="3.1" February="3.6" January="4.3"/> '+
        ' <insumos/> '+
        ' <labores/> '+
    ' </pasture> '+
    ' <pasture pastureDigestStem="65" pastureBProteinDead="3" pastureBProteinLeaf="10" pastureDRProteinStem="2.5" pastureDRProteinLeaf="5" pastureDRProteinDead="1" pastureBProteinStem="5" pastureDigestLeaf="72" pastureDigestDead="45" desc="Campo Nat" name="Salado" rot_id="3" id="3"> '+
        ' <pastureAccumRateMean December="16.4" November="20.7" October="16.9" September="10.9" August="7.5" July="6.9" June="6.6" May="7.6" April="11" March="13.9" February="15.3" January="14.5"/> '+
        ' <pastureAccumRateStdDev December="5.3" November="8.1" October="4.4" September="2.9" August="2.1" July="1.4" June="1.3" May="1.1" April="1.9" March="3.1" February="3.6" January="4.3"/> '+
        ' <insumos/> '+
        ' <labores/> '+
    ' </pasture> '+
    ' <pasture pastureDigestStem="64" pastureBProteinDead="3" pastureBProteinLeaf="10" pastureDRProteinStem="2.5" pastureDRProteinLeaf="5" pastureDRProteinDead="1" pastureBProteinStem="5" pastureDigestLeaf="72" pastureDigestDead="45" desc="Agropiro" name="Past bajo" rot_id="10" id="4"> '+
        ' <pastureAccumRateMean December="16.4" November="20.7" October="16.9" September="10.9" August="7.5" July="6.9" June="6.6" May="7.6" April="11" March="13.9" February="15.3" January="14.5"/> '+
        ' <pastureAccumRateStdDev December="5.3" November="8.1" October="4.4" September="2.9" August="2.1" July="1.4" June="1.3" May="1.1" April="1.9" March="3.1" February="3.6" January="4.3"/> '+
        ' <insumos> '+
        ' <insumo repit="true" amount="1" days_after_seed="60" activity="111" type="semilla" id="2"/> '+
        ' </insumos> '+
        ' <labores/> '+
    ' </pasture> '+
' </pastureType> '+
' <stockPilledType> '+
' <stockPilled stockPilledBProtein="10" stockPilledDRProtein="8" stockPilledDigest="56" enableDay="1" enableMonth="3" yield="75" name="Sorgo1" rot_id="12" id="2"> '+
' <insumos> '+
' <insumo repit="false" amount="1" days_after_seed="60" activity="110" type="semilla" id="2"/> '+
' </insumos> '+
' <labores/> '+
' </stockPilled> '+
' <stockPilled stockPilledBProtein="10" stockPilledDRProtein="8" stockPilledDigest="57" enableDay="1" enableMonth="3" yield="76" name="Sorgo2" rot_id="11" id="1"> '+
' <insumos> '+
' <insumo repit="false" amount="1" days_after_seed="60" activity="110" type="semilla" id="2"/> '+
' </insumos> '+
' <labores/> '+
' </stockPilled> '+
' </stockPilledType> '+
' <paddocks> '+
' <paddock id="1" name="Potrero1" paddockLeafMass="701" paddockSteamMass="600" paddockDeadMass="700" paddockUsage="grazing" paddockHA="7" paddockPastureType="1" paddockMinGrowthDays="60" paddockMinGrazingMass="2000" receta="3" anioinicio="2"/> '+
' <paddock anioinicio="2" receta="3" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="7" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero2" id="2"/> '+
' <paddock anioinicio="2" receta="4" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="7.9" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero3" id="3"/> '+
' <paddock anioinicio="2" receta="4" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="7.9" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero4" id="4"/> '+
' <paddock anioinicio="2" receta="4" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="7.9" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero5" id="5"/> '+
' <paddock anioinicio="2" receta="4" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="7.8" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero6" id="6"/> '+
' <paddock anioinicio="2" receta="1" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="6.8" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero7" id="7"/> '+
' <paddock anioinicio="2" receta="1" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="4.7" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero8" id="8"/> '+
' <paddock anioinicio="2" receta="1" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="4.6" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero9" id="9"/> '+
' <paddock anioinicio="1" receta="1" paddockMinGrazingMass="2000" paddockMinGrowthDays="60" paddockPastureType="1" paddockHA="8.4" paddockUsage="grazing" paddockDeadMass="700" paddockSteamMass="600" paddockLeafMass="701" name="Potrero10" id="10"/> '+
' </paddocks> '+
' <simulation startingYear="2004" startingMonth="6" startingDay="1" finishingYear="2010" finishingMonth="5" finishingDay="30" randomSeed="5" useRandomSeed="true" economico="false" impositivo="false"/> '+
' <globalMob useGlobalPastureAllowances="false" useGlobalGrainAllowances="false" useGlobalSilageAllowances="false" mobAllowanceAdjustmentByInterval="true" mobMovementInterval="1" minPastureAllowance="0.5" maxPastureAllowance="25" randomAnimalDataGeneration="true" comercializacionVentaCria="3" comercializacionCompraCria="3"> '+
' <globalPastureAllow January="5" February="5" March="5" April="5" May="5" June="5" July="5" August="5" September="5" October="5" November="5" December="5"/> '+
' <globalSilageAllow January="0.0" February="0.0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0.0" December="0.0"/> '+
' <globalGrainAllow January="0.0" February="0.0" March="0.0" April="0.0" May="0.0" June="0.0" July="0.0" August="0.0" September="0.0" October="0.0" November="0.0" December="0.0"/> '+
' </globalMob> '+
' <mobs> '+
' <mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="1" enableStockPilled="true" endday="31" endmonth="0" startday="1" startmonth="10" bullUtilLife="7" bullPercent="3" storeHeiferCalf="0" storeSteerCalf="0" pregnantRepositionUsed="false" repositionPercent="20" name="vacas general" mobUse="cow_calf" id="1"> '+
' <pastureAllow December="4.3" November="4.4" October="4.3" September="3.3" August="2.8" July="2.5" June="2.5" May="2.5" April="2.5" March="3" February="3" January="3.8"/> '+
' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
' <stockPilledAllow December="0" November="0" October="0" September="0" August="2.0" July="1.7" June="1.6" May="1.6" April="1.7" March="0" February="0" January="0"/> '+
' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <submobs> '+
' <submob frame="4" calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="220" calfSwMean="120" calfSwMin="28" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" startPregnant="true" isCalved="true" utillife="8" weaning="4" weightAtBirth="28" startCountAnimals="6" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="410" submobSwMean="400" submobSwMin="390" submobName="sub-rodeo 2" submobSex="female" submobAge="913" id="1"> '+
' <weanerSubMob startWithWeanerSubMob="true"> '+
' <vaquillonas1ano bcs="5" swMin="150" swMean="160" swMax="170" age="270" amount="10"/> '+
' <vaquillonas2ano bcs="5" swMin="290" swMean="300" swMax="310" age="660" amount="1"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="false" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="204" startPregnant="true" bcs="5" swMin="390" swMean="400" swMax="410" amount="4" startWithCutSubMob="true"/> '+
' </submob> '+
' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="6" weightAtBirth="28" startCountAnimals="6" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="415" submobSwMean="405" submobSwMin="395" submobName="sub-rodeo 3" submobSex="female" submobAge="1278" id="2"> '+
' <weanerSubMob startWithWeanerSubMob="false"> '+
' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
' </submob> '+
' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="6" weightAtBirth="28" startCountAnimals="6" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="420" submobSwMean="410" submobSwMin="400" submobName="sub-rodeo 4" submobSex="female" submobAge="1643" id="3"> '+
' <weanerSubMob startWithWeanerSubMob="false"> '+
' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
' </submob> '+
' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="6" weightAtBirth="28" startCountAnimals="6" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="425" submobSwMean="415" submobSwMin="405" submobName="sub-rodeo 5" submobSex="female" submobAge="2008" id="4"> '+
' <weanerSubMob startWithWeanerSubMob="false"> '+
' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
' </submob> '+
' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="6" weightAtBirth="28" startCountAnimals="6" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="420" submobSwMean="410" submobSwMin="400" submobName="sub-rodeo 6" submobSex="female" submobAge="2373" id="5"> '+
' <weanerSubMob startWithWeanerSubMob="false"> '+
' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
' </submob> '+
' <submob calfBCS="5" calfAge="60" maxDayAfterCalving="90" meanDayAfterCalving="70" minDayAfterCalving="40" calfSwMax="140" calfSwMean="90" calfSwMin="40" calfPresence="false" submobPregnancyDaysMin="204" submobPregnancyDaysMean="234" submobPregnancyDaysMax="254" frame="5" startPregnant="true" isCalved="true" utillife="8" weaning="6" weightAtBirth="28" startCountAnimals="5" submobIonospheres="false" submobBCS="5" submobBreed="0" submobSwMax="415" submobSwMean="405" submobSwMin="395" submobName="sub-rodeo 7" submobSex="female" submobAge="2738" id="6"> '+
' <weanerSubMob startWithWeanerSubMob="false"> '+
' <vaquillonas1ano bcs="5" swMin="220" swMean="250" swMax="280" age="270" amount="63"/> '+
' <vaquillonas2ano bcs="5" swMin="280" swMean="300" swMax="320" age="580" amount="63"/> '+
' </weanerSubMob> '+
' <cutSubMob calfAge="60" calfBCS="5" calfSwMin="28" calfSwMean="120" calfSwMax="220" calfPresence="true" pregnancyDaysMax="254" pregnancyDaysMean="234" pregnancyDaysMin="164" startPregnant="true" bcs="5" swMin="460" swMean="480" swMax="500" amount="63" startWithCutSubMob="false"/> '+
' </submob> '+
' </submobs> '+
' <weaning_mob enableCrop_stubble="false" crop_stubblePriority="3" stockPilledPriority="3" enableStockPilled="false" service="27"> '+
' <pastureAllow December="4.3" November="4.4" October="4.3" September="3.3" August="2.8" July="2.5" June="2.1" May="2.5" April="4" March="4" February="4" January="3.8"/> '+
' <silageAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
' <grainAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
' <stockPilledAllow December="0" November="0" October="0" September="0" August="0" July="0" June="0" May="0" April="0" March="0" February="0" January="0"/> '+
' <crop_stubbleAllow January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <paddockAssigned> '+
' <paddock id="1"/> '+
' <paddock id="2"/> '+
' <paddock id="3"/> '+
' <paddock id="4"/> '+
' <paddock id="5"/> '+
' <paddock id="6"/> '+
' <paddock id="7"/> '+
' <paddock id="8"/> '+
' <paddock id="9"/> '+
' </paddockAssigned> '+
' </weaning_mob> '+
' <paddockAssigned> '+
' <paddock id="1"/> '+
' <paddock id="2"/> '+
' <paddock id="3"/> '+
' <paddock id="4"/> '+
' <paddock id="5"/> '+
' <paddock id="6"/> '+
' <paddock id="7"/> '+
' <paddock id="8"/> '+
' <paddock id="9"/> '+
' <paddock id="10"/> '+
' </paddockAssigned> '+
' </mob> '+
' </mobs> '+
' <feeding grainDRProtein="8" grainDigest="86" grainInitial="1100" grainBProtein="10" silageDRProtein="12" silageDigest="72" silageInitial="50" silageBProtein="16"/> '+
' <globalPasture randomPastureGeneration="true" minLeafMassCeil="2499" maxLeafMassCeil="4001" seasonalPastureQtyVariationEnabled="false" seasonalPastureQtyLeafScaleFactor="0" seasonalPastureQtyStemScaleFactor="0.5" seasonalPastureQtyDeadScaleFactor="0" stemReproductiveQtyRegulationEnabled="false" stemNonReproductiveQtyRegulationEnabled="false" stemReproductiveQtyRegulationA="1" stemReproductiveQtyRegulationB="1" stemNonReproductiveQtyRegulationA="1" stemNonReproductiveQtyRegulationB="1" stemMassQtyRegulationLimit="0" growthMethod="taza"/> '+
' <sellRule startmonth="6" startday="1" endmonth="5" endday="30" lwValue="380" bcsValue="1" type="lw" enable="true" comercializacion="4.5"/> '+
' <makeSilage startmonth="9" startday="15" endmonth="1" endday="15" triggerMass="300" leftoverMass="100" pastureDigestibility="72" pastureDRProtein="12" enable="true" pastureBProtein="16"/> '+
' <controlPastureCover period1StartingYear="2018" period1StartingMonth="8" period1StartingDay="1" period2StartingYear="2018" period2StartingMonth="2" period2StartingDay="30" enable="true" repeatYears="true"> '+
' <pastureAllowAdjList> '+
    ' <pastureAllowAdjP1Range1 min="0" max="5.0" adjustmentPos="0.05" adjustmentNeg="0.025"/> '+
    ' <pastureAllowAdjP1Range2 min="5.1" max="10.0" adjustmentPos="0.15" adjustmentNeg="0.075"/> '+
    ' <pastureAllowAdjP1Range3 min="10.1" max="15.0" adjustmentPos="0.30" adjustmentNeg="0.15"/> '+
    ' <pastureAllowAdjP1Range4 min="15.1" max="25.0" adjustmentPos="0.45" adjustmentNeg="0.22"/> '+
    ' <pastureAllowAdjP1Range5 min="25.1" max="inf" adjustmentPos="0.50" adjustmentNeg="0.30"/> '+
    ' <pastureAllowAdjP2Range1 min="0" max="5.0" adjustmentPos="0" adjustmentNeg="0"/> '+
    ' <pastureAllowAdjP2Range2 min="5.1" max="10.0" adjustmentPos="0.12" adjustmentNeg="0.05"/> '+
    ' <pastureAllowAdjP2Range3 min="10.1" max="15.0" adjustmentPos="0.22" adjustmentNeg="0.10"/> '+
    ' <pastureAllowAdjP2Range4 min="15.1" max="25.0" adjustmentPos="0.32" adjustmentNeg="0.15"/> '+
    ' <pastureAllowAdjP2Range5 min="25.1" max="inf" adjustmentPos="0.42" adjustmentNeg="0.20"/> '+
' </pastureAllowAdjList> '+
' <targetPastureCover January="210" February="200" March="200" April="200" May="180" June="800" July="800" August="800" September="900" October="100" November="300" December="2200"/> '+
' </controlPastureCover> '+
' <buyRule enable="true" repeatYears="false" comercializacion="5.4"/> '+
' <suplementation startmonth="6" startday="1" endmonth="5" endday="30" adjustmentDays="10" adjustAllowanceGradually="true" checkIntervalDays="30" enable="false"> '+
' <submobAvgWeithList/> '+
' <adjustmentList> '+
' <adjustmentRange1 min="0" max="5.0" adjustment="0.005"/> '+
' <adjustmentRange2 min="5.1" max="10.0" adjustment="0.01"/> '+
' <adjustmentRange3 min="10.1" max="15.0" adjustment="0.015"/> '+
' <adjustmentRange4 min="15.1" max="25.0" adjustment="0.2"/> '+
' <adjustmentRange5 min="25.1" max="inf" adjustment="0.21"/> '+
' </adjustmentList> '+
' </suplementation> '+
' <resourceUsage enable="true"> '+
' <pasture> '+
' <resource id="1" startday="1" startmonth="1" endday="1" endmonth="3"> '+
' <listOfMobs all="true"> '+
' <mob id="1" this="true" cut="false" weaner="false"/> '+
' </listOfMobs> '+
' </resource> '+
' <resource id="2" startday="1" startmonth="1" endday="1" endmonth="3"> '+
' <listOfMobs all="false"> '+
' <mob id="1" this="false" cut="true" weaner="false"/> '+
' </listOfMobs> '+
' </resource> '+
' </pasture> '+
' <crop_stubbles/> '+
' <stockPilled/> '+
' </resourceUsage> '+
' <feedlot> '+
' <completion enabled="false" suministro="4"> '+
' <cef maximo="true" rango="false" pmax="250" pmin="100"/> '+
' <csf lwValue="360" bcsValue="5" type="lw"/> '+
' <diet feedlotDRProtein="8" feedlotDigest="85" feedlotIntake="2" feedlotBProtein="10"/> '+
' <mobs/> '+
' </completion> '+
' <fattening startmonth="4" startday="12" endmonth="4" endday="12" enabled="false" suministro="5"> '+
' <cef maximo="true" rango="false" pmax="250" pmin="100"/> '+
' <csf pout="360"/> '+
' <diet feedlotDRProtein="8" feedlotDigest="85" feedlotIntake="2" feedlotBProtein="10"/> '+
' <mobs/> '+
' </fattening> '+
' </feedlot> '+
' <otherOportunityToEmptyCows enable="false"/> '+
' <patrimonio> '+
' <pasivo banco="0" proveedores="0" impositivo="0"/> '+
' <activo caja="1000" banco="5000" porcobrar="0" landvalue="1120000" buildingvalue="200000"> '+
' <bienesdeuso> '+
' <deuso id="1" name="Camioneta" buyday="18" buymonth="9" buyyear="2017" utillife="10" buyvalue="80000" type="mconm"/> '+
' </bienesdeuso> '+
' </activo> '+
' </patrimonio> '+
' <retiros retiroprct="0"/> '+
' <gastos> '+
' <estructura> '+
' <personal type="anual" anual="1027" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <seguro type="anual" anual="1027" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <patente type="anual" anual="2000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <comunicacion type="anual" anual="2000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </estructura> '+
' <maquinaria> '+
' <personal type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <seguro type="anual" anual="1300" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <combustible type="anual" anual="9000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <reparacion type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </maquinaria> '+
' <administracion> '+
' <asesor type="anual" anual="24000" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </administracion> '+
' <invernada> '+
' <personal type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </invernada> '+
' <cria> '+
' <personal type="anual" anual="2019" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </cria> '+
' <impositivo inmobiliario="5000" ganancia="3000" redesviales="0"/> '+
' <sanitario> '+
' <invernada type="anual" anual="0" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' <cria type="anual" anual="40.8" January="0" February="0" March="0" April="0" May="0" June="0" July="0" August="0" September="0" October="0" November="0" December="0"/> '+
' </sanitario> '+
' </gastos> '+
' <clima id="0"> '+
' <year id="1" number="1997" ord="1"/> '+
' <year id="2" number="1998" ord="2"/> '+
' </clima> '+
' </escenario> ';

let ObjetoSimulacion = {};
let parseString = require('xml2js').parseString;
parseString(xml, function (err, result) {
     ObjetoSimulacion = result;
});

/* 
    Generacion del estado de los recursos forrajeros
*/
export default ObjetoSimulacion;