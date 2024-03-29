module.config([ '$routeProvider', function($routeProvider) {
    $routeProvider
            .when('/realms/:realm/authz', {
                templateUrl : resourceUrl + '/partials/resource-server-list.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerCtrl'
            }).when('/realms/:realm/authz/resource-server/create', {
                templateUrl : resourceUrl + '/partials/resource-server-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    },
                    clients : function(ClientListLoader) {
                        return ClientListLoader();
                    }
                },
                controller : 'ResourceServerDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid', {
                templateUrl : resourceUrl + '/partials/resource-server-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    },
                    clients : function(ClientListLoader) {
                        return ClientListLoader();
                    },
                    serverInfo : function(ServerInfoLoader) {
                        return ServerInfoLoader();
                    }
                },
                controller : 'ResourceServerDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/evaluate', {
                templateUrl : resourceUrl + '/partials/policy/resource-server-policy-evaluate.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    },
                    clients : function(ClientListLoader) {
                        return ClientListLoader();
                    },
                    roles : function(RoleListLoader) {
                        return new RoleListLoader();
                    }
                },
                controller : 'PolicyEvaluateCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/evaluate/result', {
                templateUrl : resourceUrl + '/partials/policy/resource-server-policy-evaluate-result.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'PolicyEvaluateCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/resource', {
                templateUrl : resourceUrl + '/partials/resource-server-resource-list.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerResourceCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/resource/create', {
                templateUrl : resourceUrl + '/partials/resource-server-resource-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerResourceDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/resource/:rsrid', {
                templateUrl : resourceUrl + '/partials/resource-server-resource-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerResourceDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/scope', {
                templateUrl : resourceUrl + '/partials/resource-server-scope-list.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerScopeCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/scope/create', {
                templateUrl : resourceUrl + '/partials/resource-server-scope-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerScopeDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/scope/:id', {
                templateUrl : resourceUrl + '/partials/resource-server-scope-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerScopeDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy', {
                templateUrl : resourceUrl + '/partials/policy/resource-server-policy-list.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/drools/create', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-drools-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyDroolsDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/drools/:id', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-drools-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyDroolsDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/resource/create', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-resource-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyResourceDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/resource/:id', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-resource-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyResourceDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/scope/create', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-scope-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyScopeDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/scope/:id', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-scope-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyScopeDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/user/create', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-user-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyUserDetailCtrl'
            }).when('/realms/:realm/authz/resource-server/:rsid/policy/user/:id', {
                templateUrl : resourceUrl + '/partials/policy/provider/resource-server-policy-user-detail.html',
                resolve : {
                    realm : function(RealmLoader) {
                        return RealmLoader();
                    }
                },
                controller : 'ResourceServerPolicyUserDetailCtrl'
            });
} ]);

module.directive('kcTabsResourceServer', function () {
    return {
        scope: true,
        restrict: 'E',
        replace: true,
        templateUrl: resourceUrl + '/templates/kc-tabs-resource-server.html'
    }
});

module.filter('unique', function () {

    return function (items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});

module.filter('toCamelCase', function() {
    return function(input) {
        input = input || '';
        return input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
})