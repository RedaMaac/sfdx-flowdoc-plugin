import { ProcessMetadataValue } from './processMetadataValue';
import { RecordCreate, RecordUpdate, RecordLookup } from './flowRecordAction';

export interface Flow {
    processType: string;
    label: string;
    description: string;
    startElementReference?: string;
    variables: Variable | Array<Variable>;
    processMetadataValues: Array<ProcessMetadataValue>;
    formulas: any;
    decisions: Decision | Array<Decision>;
    assignments: any;
    actionCalls?: ActionCall | Array<ActionCall>;
    recordUpdates?: RecordUpdate | Array<RecordUpdate>;
    recordCreates?: RecordCreate | Array<RecordCreate>;
    recordLookups?: RecordLookup | Array<RecordLookup>;
    recordDeletes?: any;
    loops?: any;
    waits: any;
    start?: any;
}

export interface Variable {
    name: string;
    objectType: string;
}

export interface ActionCall {
    actionType: string;
    name: string;
    label: string;
    connector: any;
    processMetadataValues: any;
    inputParameters: any;
}

export function implementsActionCall(arg: any): arg is ActionCall {
    return !(arg.actionType === 'recordUpdate' || arg.actionType === 'recordCreate');
}

export interface Decision {
    name: string;
    label: string;
    processMetadataValues?: ProcessMetadataValue;
    rules: any;
    defaultConnector: any;
}

export interface InputParamValue {
    stringValue?: string;
    elementReference?: string;
}
