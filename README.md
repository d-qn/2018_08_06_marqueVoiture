## Data cleaning

#### VD

* Ouverture du fichier *Nombre_vhc_marque_par_commune.xlsx* dans google refine
* Create new column: marques_cleaned based on marques
* Filtrer **voiture de tourisme** 
* Pour les marques, faceting par text puis
  * Conciliation --> marques de voiture
  * cluster par défaut
  * select all and merge and recluster
  *   