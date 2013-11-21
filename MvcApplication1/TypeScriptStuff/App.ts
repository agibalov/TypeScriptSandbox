/// <reference path='Service1.ts' />
/// <reference path='Service2.ts' />

module MyModule {

    var service1: Service1 = new Service1();
    service1.hello();

    var service2: Service2 = new Service2();
    service2.hello();

}