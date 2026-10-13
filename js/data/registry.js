/* Case registry: chronological campaign order and active-case lookup. */
(function(root){'use strict';var T=root.TLT=root.TLT||{};T.cases=[T.case01,T.case02,T.case03,T.case04,T.case05,T.case06,T.case07,T.case08,T.case09,T.case10,T.case11,T.case12];T.getCase=function(id){return T.cases.find(function(c){return c.id===id})||T.cases[0]};T.activeCase=T.cases[0];})(window);
