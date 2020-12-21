// Рассширение Фибоначчи 
#include <napi.h>

Napi::Number sumCount(int value)
{
    if (value <= 0)
        return 0;
    else if (value == 1)
        return 1;
    else
        return sumCount(value - 1) + value;
}

Napi::Object init(Napi::Env env, Napi::Object exports)
{
    exports.Set(Napi::String::New(env, "sayHi"), Napi::Function::New(env, sumCount));
    return exports;
};

NODE_API_MODULE(test, init);