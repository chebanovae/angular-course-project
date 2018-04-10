export class DataService {
    getData() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 1500);
        });
        return promise;
    }
}
