namespace Utility {

    export namespace Fees{
        export function calculateLateFee(daysLate: number): number{
            return daysLate * .25;
        }
    }

}