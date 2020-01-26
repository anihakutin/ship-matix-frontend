// Define columns for shipping settings table here:
export const columns = [
  { key: 'service_name', name: 'Service Name' },
  { key: 'service_code', name: 'Service Code' },
  { key: 'max_weight', name: 'Max Weight', editable: true  },
  { key: 'rate', name: 'Rate', editable: true },
  { key: 'carrier_id', name: 'Carrier Id' },
  { key: 'carrier_code', name: 'Carrier Code' },
  { key: 'standard', name: 'Standard', editable: true  },
  { key: 'domestic', name: 'Domestic', editable: true  },
  { key: 'expedited', name: 'Expedited', editable: true  },
  { key: 'next_day', name: 'Next Day', editable: true },
  { key: 'second_day', name: 'Second Day', editable: true  },
  { key: 'international', name: 'International', editable: true  }
]
